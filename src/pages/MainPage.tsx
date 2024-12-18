// import React from "react";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate('/login')}>로그인</Button>
      <br />
      <Button onClick={() => navigate('/signup')}>회원가입</Button>
    </>
  );
}
