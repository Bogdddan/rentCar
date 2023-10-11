import { Lcircle, Lshadow, Lwrapper } from "./ButtonLoader.styled";
import css from './ButtonLoader.module.css';
const ButtonLoader = () => {
  return (
    <Lwrapper>
      <Lcircle></Lcircle>
      <Lcircle></Lcircle>
      <Lcircle></Lcircle>
      <Lshadow></Lshadow>
      <Lshadow></Lshadow>
      <Lshadow></Lshadow>
    </Lwrapper>
  );
};

export default ButtonLoader;