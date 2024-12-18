import { ChangeEvent, useState } from 'react';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { login } from '@/api/auth';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      await login(loginForm.email, loginForm.password);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-60 flex flex-col gap-4">
        {loginForm.email}
        {loginForm.password}
        <div>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="email"
            value={loginForm.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            value={loginForm.password}
            onChange={handleChange}
          />
        </div>
        <Button className="mt-4" onClick={() => handleLogin()}>
          로그인
        </Button>
      </div>
    </>
  );
}
