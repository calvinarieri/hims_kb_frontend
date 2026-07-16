import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { HiArrowRight, HiEye, HiEyeOff } from 'react-icons/hi'; // Added eye icons
import TextInputs from '../../components/input/TextInputs';

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);

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
    <div className="relative flex min-h-screen w-full items-center justify-center bg-slate-100 px-4">
      
      <div 
        onClick={handleLogoClick}
        className="absolute top-6 left-6 flex items-center space-x-2 cursor-pointer group select-none"
      >
        <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
          Tiberbu <span className="text-emerald-600 font-medium">Docs</span>
        </span>
      </div>

      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        
        <div className="space-y-2">
          <h2 className="font-bold text-2xl text-slate-950">Admin access</h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Welcome back. Please provide your credentials to access the admin dashboard.
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form className="space-y-4">            

              <TextInputs 
                name="email"
                type="email" 
                placeholder="john.doe@hospital.com" 
                label="Email Address"
              /> 
              <TextInputs 
                name="password"
                type={showPassword ? 'text' : 'password'} 
                placeholder="••••••••" 
                label="Password" 
              />                

              <a href="#forgot" className="text-xs font-semibold text-amber-600 hover:underline">
                Forgot?
              </a>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-semibold text-sm transition-all duration-150 cursor-pointer shadow-xs disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Authenticating...' : 'Log in'}</span>
                {!isSubmitting && <HiArrowRight className="w-4 h-4" />}
              </button>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}