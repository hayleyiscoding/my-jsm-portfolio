import Image from "next/image";

import { Button } from "../components/ui/button";
import { spinner } from "../public/assets/index";

interface ButtonWithSpinnerProps {
  isLoading: boolean;
  loadingText: string;
  text: string;
}

const ButtonWithSpinner: React.FC<ButtonWithSpinnerProps> = ({
  isLoading,
  loadingText,
  text,
}) => {
  return (
    <Button type='submit' value='Send' className='submitButton'>
      {isLoading && (
        <Image
          src={spinner}
          alt='spinner'
          className='mr-3 inline animate-spin'
          aria-hidden='true'
          width={16}
          height={16}
        />
      )}
      {isLoading ? loadingText : text}
    </Button>
  );
};

export default ButtonWithSpinner;
