import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type AboutProps = {
  isUpSmall: boolean;
};

const About: React.FC<AboutProps> = ({ isUpSmall }) => {
  return (
    <Box maxWidth="lg" mx="auto" my={2} px="8px">
      <Box
        component={isUpSmall ? "h1" : "h2"}
        textAlign="center"
        m={0}
        borderBottom="2px solid #222"
        mb={1}
        fontFamily='"M PLUS Rounded 1c"'
        fontWeight={800}
      >
        About
      </Box>
      <Box py="4px" display="flex" alignItems="center">
        <Box
          component="img"
          src="/avatar.png"
          height={100}
          borderRadius={100}
          mr={4}
        />
        <Box>
          <Typography
            variant="h4"
            fontFamily='"M PLUS Rounded 1c"'
            mb={1}
            fontWeight={600}
          >
            鳩屋敷
          </Typography>
          <Box>
            Webエンジニア。東京某社で働いている。趣味はプログラミング、動画サイト徘徊、パズル。
          </Box>
          <Box>また、ニコニコ動画で音MADやボイロ動画を作成し投稿している。</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
