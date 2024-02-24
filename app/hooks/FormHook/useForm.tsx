import { ReactElement, useState } from "react";

type FormStateType<T> = {
    state: T;
}

const useForm = <T,>({state}: FormStateType<T>) => {
  const [formState, setFormState] = useState<T>(state);
  const handleFormStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };
};
