import './Container.css';

interface ContainerProps {
  name: string;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;
