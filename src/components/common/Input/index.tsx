import { ComponentPropsWithoutRef } from 'react';
import s from './Input.module.css'

type InputPropsType = {
   className?: string
} & ComponentPropsWithoutRef<'input'>

const Input = ({ className, ...props }: InputPropsType) => {

   let styles = [s.input];

   if (className) {
      // styles = [...optionalStyles, s.input];
      styles.push(className);
   }

   return (
      <input className={styles.join(' ')} {...props} />
   );
};

export default Input;