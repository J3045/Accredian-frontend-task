import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import lottie from 'lottie-web';
import successAnimation from '../assets/success-animation.json'; 
const BASE_URL= process.env.BASE_URL;

const ReferralModal = ({ isOpen, onRequestClose }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const animationContainer = React.createRef();

  useEffect(() => {
    if (successMessage) {
      lottie.loadAnimation({
        container: animationContainer.current,
        animationData: successAnimation, 
        loop: false,
        autoplay: true,
      });
    }
  }, [successMessage]);

  const validationSchema = Yup.object().shape({
    referrerName: Yup.string().required('Referrer Name is required'),
    referrerEmail: Yup.string().email('Invalid email').required('Referrer Email is required'),
    refereeName: Yup.string().required('Referee Name is required'),
    refereeEmail: Yup.string().email('Invalid email').required('Referee Email is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const response = await axios.post('${BASE_URL}/api/referral', values);
      setSuccessMessage('Referral created successfully!');
      setIsSubmitting(false);
      resetForm();
    } catch (error) {
      setErrorMessage('Failed to create referral or send email');
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setSuccessMessage('');
    setErrorMessage('');
    onRequestClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            {successMessage ? (
              <div className="success-message text-center">
                <div ref={animationContainer} style={{ width: '100%', height: 'auto' }}></div>
                <h2 className="text-xl font-bold mb-4">{successMessage}</h2>
                <button onClick={closeModal} className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Close
                </button>
              </div>
            ) : (
              <Formik
                initialValues={{
                  referrerName: '',
                  referrerEmail: '',
                  refereeName: '',
                  refereeEmail: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
                    <div className="mb-4">
                      <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700">Referrer Name:</label>
                      <Field type="text" name="referrerName" id="referrerName" className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      <ErrorMessage name="referrerName" component="p" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700">Referrer Email:</label>
                      <Field type="email" name="referrerEmail" id="referrerEmail" className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      <ErrorMessage name="referrerEmail" component="p" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="refereeName" className="block text-sm font-medium text-gray-700">Referee Name:</label>
                      <Field type="text" name="refereeName" id="refereeName" className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      <ErrorMessage name="refereeName" component="p" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="refereeEmail" className="block text-sm font-medium text-gray-700">Referee Email:</label>
                      <Field type="email" name="refereeEmail" id="refereeEmail" className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      <ErrorMessage name="refereeEmail" component="p" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button type="submit" disabled={isSubmitting} className="mr-4 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                      <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        Close
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ReferralModal;
