import { TypeText, TypographyVariants, TypographyPropsVariantOverrides } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypeText {
        iconLight: string;
        iconDark: string;
        caption: string;
    }
    interface TypographyVariants {
            h3Bold: React.CSSProperties;
            h3Thin: React.CSSProperties;
            h4Warning: React.CSSProperties;
            btnIconText: React.CSSProperties;
        }
      // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
            h3Bold?: React.CSSProperties;
            h3Thin?: React.CSSProperties;
            h4Warning?: React.CSSProperties;
            btnIconText?: React.CSSProperties;
        }
    }
    
    // Update the Typography's variant prop options
    declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        h3Bold: true;
        h3Thin: true;
        h4Warning: true;
        btnIconText: true;
    }
}