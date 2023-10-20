import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { httpClient } from '../../app/services/httpClient';

const schema = z.object({
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Informe um email válido'),
  password: z.string().min(8, 'A senha deve conter 8 caracteres'),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    await httpClient.post('auth/signin', data);
  });

  return { register, handleSubmit, errors };
}
