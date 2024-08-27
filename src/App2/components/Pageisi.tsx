import './Kontainer.css';
import { Children } from 'react';

interface Props {
  children: React.ReactNode;
}

const Pageisi: React.FC<Props> = ({ children }) => {
  return (
    <div className="container">
      { children }
    </div>
  );
};
export default Pageisi;
