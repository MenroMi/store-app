import { Box, Typography, Theme, useTheme } from '@mui/material';
import { CustomTypographyName } from '../../Cards/Card/CardStyles';
import { useEffect, useState } from 'react';

// interface
interface ISearchPopularTermsProps {
  onChangeSearchTerm: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

// mock data
const PopularSearch = ['Nike Air Force 1 LV8', 'Nike Air Force 1', `Nike Air Force 1 '07 High'`];

const SearchPopularTerms: React.FC<ISearchPopularTermsProps> = ({ onChangeSearchTerm }) => {
  const [popular, setPopular] = useState<string[]>([]);
  const { palette } = useTheme<Theme>();

  useEffect(() => {
    setPopular(PopularSearch);
  }, [popular]);

  return (
    <Box
      sx={{
        maxWidth: '500px',
        width: '100%',
        display: { lg: 'flex', xs: 'none' },
        flexDirection: 'column',
        justifyContent: 'space-between',
        order: { lg: 2 },
      }}
    >
      <Typography variant="h5" sx={{ color: palette.text.primary }}>
        Popular Search Terms
      </Typography>
      <Box
        sx={{
          mt: '10px',
          flex: '2',
        }}
      >
        {popular.map((search) => (
          <CustomTypographyName
            variant="subtitle1"
            key={search}
            sx={{
              cursor: 'pointer',
              '&:hover': { color: palette.primary.main },
              fontSize: { xl: '20px', md: '20px' },
            }}
            onClick={(e) => onChangeSearchTerm(e)}
          >
            {search}
          </CustomTypographyName>
        ))}
      </Box>
    </Box>
  );
};

export default SearchPopularTerms;
