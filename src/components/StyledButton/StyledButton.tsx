import { styled } from "@mui/system";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
    onClick?: () => void; // adicionando onClick como uma prop opcional
    type?: "button" | "submit" | "reset"; // adicionando type como uma prop opcional
    className?: string; // adicionando className como uma prop opcional
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, ...props }) => {
  
  const CustomButton = styled("button")(({theme}) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "2px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor:"pointer",
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
    }
  }));

  return (
    <CustomButton {...props}>
      {children}
    </CustomButton>
  );
};

export default StyledButton;