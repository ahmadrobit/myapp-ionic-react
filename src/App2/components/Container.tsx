import './Container.css';

interface ContainerProps {
  children: string;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;
