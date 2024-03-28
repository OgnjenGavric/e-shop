import React from 'react';

const FormWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex items-center justify-center min-h-fit h-full pt-24 pb-12'>
      <div className='flex flex-col w-full max-w-[650px] items-center shadow-xl shadow-slate-200 rounded-md p-4 md:p-8 gap-5'>
        {children}
      </div>
    </div>
  );
};

export default FormWrap;
