import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import {HiArrowRight } from 'react-icons/hi';
import TextInputs from '../../components/input/TextInputs';

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);

  // Simple path helper (replace with your router's navigate/link function if using react-router)
  const handleLogoClick = () => {
    window.location.href = '/'; 
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Login Submission Data:', values);
    setSubmitting(false);
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-slate-50 font-sans px-4">
      
      <div 
        onClick={handleLogoClick}
        className="absolute top-6 left-6 flex items-center space-x-2 cursor-pointer group select-none"
      >

        <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
          Tiberbu <span className="text-blue-500 font-medium">Docs</span>
        </span>
      </div>

      <div className="w-full max-w-md space-y-8 bg-transparent">
        
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Hello 👋,
          </h1>
          <p className="text-sm text-slate-500">
            Welcome back. please provide your credentials to access the admin dashboard.
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5 bg-transparent p-0">            

                <TextInputs 
                    name="email"
                    type="email" 
                    placeholder="john.doe@hospital.com" 
                    label='Email Address'
                />
                <TextInputs 
                    name="password"
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="••••••••" 
                    label='Password'
                />

                <a href="#forgot" className="text-xs font-medium text-emerald-600 hover:underline">
                    Forgot?
                </a>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all duration-150 cursor-pointer shadow-xs disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Authenticating...' : 'log in'}</span>
                {!isSubmitting && <HiArrowRight className="w-4 h-4" />}
              </button>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}