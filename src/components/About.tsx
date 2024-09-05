import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const About = () => {
  const theme = useTheme();
  const isUpSmall = useMediaQuery(() => theme.breakpoints.up("sm"));

  return (
    <Box maxWidth="lg" mx="auto" my={2} px="8px">
      <Box component={isUpSmall ? "h1" : "h2"} textAlign="center" m={0} borderBottom="2px solid #222" mb={1}>
        About
      </Box>
      <Box py="4px" display="flex" alignItems="center">
        <Box component="img" src="/avatar.png" height={100} borderRadius={100} mr={4} />
        <Box>
          <Typography variant={isUpSmall ? "h3" : "h4"} fontFamily='"Kiwi Maru"' mb={1}>鳩屋敷</Typography>
          <Box>Webエンジニア。東京某社で働いている。趣味はプログラミング、動画サイト徘徊、パズル。</Box>
          <Box>また、ニコニコ動画で音MADやボイロ動画を作成し投稿している。</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default About;
