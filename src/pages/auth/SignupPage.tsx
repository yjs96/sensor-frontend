import { ChangeEvent, useState } from 'react';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signup } from '@/api/auth';

export default function SignupPage() {
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignupForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await signup(signupForm.email, signupForm.name, signupForm.password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-60 flex flex-col gap-4">
        {signupForm.name}
        {signupForm.email}
        {signupForm.password}
        <div>
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            type="text"
            value={signupForm.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="email"
            value={signupForm.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            value={signupForm.password}
            onChange={handleChange}
          />
        </div>
        <Button className="mt-4" onClick={() => handleSubmit()}>
          가입
        </Button>
      </div>
    </>
  );
}
