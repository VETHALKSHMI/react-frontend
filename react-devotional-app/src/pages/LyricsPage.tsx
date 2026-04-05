import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import mutruganLyrics from "../lyrics/muruganLyrics/kanda-sashti-kavasam.json";

export const LyricsPage = () => {
  return (
    <Box
      sx={{
        flex: 1,
        overflowY: "auto",
        bgcolor: "background.default",
        transition: "background-color 0.5s ease-in-out",
        pb: 10,
        
      }}
    >
      <Container
        disableGutters // This removes the default MUI side padding on mobile
        sx={{ maxWidth: "800px", px: 3 }}
      >
        <Box sx={{ py: 4 }}>
          {mutruganLyrics.lyrics.map((verse, index) => (
            <Box key={index} sx={{ mb: 5 }}>
              <Box sx={{ mb: 2 }}>
                {verse.lines.tamil.map((line, i) => (
                  <Typography
                    key={i}
                    sx={{
                      ransition: "color 0.6s ease-in-out",
                      fontSize: { xs: "3.8vw", md: "1.5rem" },
                      // whiteSpace: "nowrap",
                      // textAlign: "center",
                      display: "block",
                      overflow: "hidden", // Prevents the page from shaking
                      // textOverflow: "ellipsis", // Adds '...' if it absolutely cannot fit
                      // fontSize: { xs: 18, sm: 20 },
                      color: "text.primary",
                      fontFamily: "Noto Sans Tamil",
                      fontWeight: "bold",
                    }}
                  >
                    {line}
                  </Typography>
                ))}
              </Box>
              {/* English/Transliteration Block */}
              {/* <Box>
                {verse.lines.english.map((line, i) => (
                  <Typography key={i} sx={{ 
                    // fontSize: { xs: '0.9rem', md: '1.1rem' },
                    fontSize: { xs: 18, sm: 20 },
                    // color: "#7F8C8D", // Subtle grey
                    fontFamily: "Noto Sans Tamil",
                    fontStyle: 'italic',
                    lineHeight: 1.4
                  }}>
                    {line}
                  </Typography>
                ))}
              </Box> */}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
