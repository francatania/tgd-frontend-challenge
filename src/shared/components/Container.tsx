import { Box, type BoxProps } from "@mui/material";
import type { CSSProperties, ReactNode } from "react";

interface ContainerProps extends Omit<BoxProps, "sx" | "maxWidth"> {
  children: ReactNode;
  padding?: number | string;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  centered?: boolean;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  gap?: number | string;
  className?: string;
  style?: CSSProperties;
}

const Container = ({
  children,
  padding = 2,
  maxWidth = "lg",
  centered = true,
  flexDirection = "column",
  alignItems,
  justifyContent,
  gap,
  className,
  style,
  ...boxProps
}: ContainerProps) => {
  const maxWidthMap = {
    xs: "444px",
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1536px",
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: maxWidth ? maxWidthMap[maxWidth] : "none",
        margin: centered ? "0 auto" : "0",
        padding: typeof padding === "number" ? `${padding * 8}px` : padding,
        display: "flex",
        flexDirection,
        alignItems: alignItems || (centered ? "center" : "stretch"),
        justifyContent: justifyContent || (centered ? "center" : "flex-start"),
        gap: typeof gap === "number" ? `${gap * 8}px` : gap,
        ...style,
      }}
      className={className}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default Container;
