import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { X } from "@mui/icons-material";

const Header = () => {
  const theme = useTheme();
  const isUpMedium = useMediaQuery(() => theme.breakpoints.up("md"));
  const isUpSmall = useMediaQuery(() => theme.breakpoints.up("sm"));

  return (
    <Box minHeight={60} color="white" sx={{backgroundColor: "#282828"}}>
      <Box maxWidth="lg" m="auto" display="flex" alignItems="center" height="60px" px={2} justifyContent="space-between">
        <Box display="flex" alignItems={isUpSmall ? "flex-end" : "center"} gap={1}>
          <Box component="img" src="/avatar.png" height="40px" borderRadius={2} />
          {isUpSmall && (
              <Typography fontFamily='"Hina Mincho"' variant="h4" fontSize="2rem">PigeonsHouse's Portfolio</Typography>
          )}
          {isUpMedium && (
            <Typography fontFamily='"Hina Mincho"'>鳩屋敷のお屋敷</Typography>
          )}
        </Box>
        <Box display="flex" alignItems="center" height="50%" gap={1.5}>
          <Link href="https://www.nicovideo.jp/user/125551772" height="95%" target="_blank" rel="noopener">
            <Box component="img" src="/nc296562.png" height="100%" />
          </Link>
          <Link href="https://x.com/PigeonsHouse" height="100%" sx={{color: 'white'}} target="_blank" rel="noopener">
            <X sx={{fontSize: 30}} />
          </Link>
          <Link href="https://qiita.com/PigeonsHouse" height="95%" target="_blank" rel="noopener">
            <Box component="img" src="/qiita-white-icon.png" height="100%" />
          </Link>
          <Link href="https://github.com/PigeonsHouse" height="100%" sx={{color: 'white'}} target="_blank" rel="noopener">
            <GitHubIcon sx={{fontSize: 30}} />
          </Link>
          <Link href="https://voskey.icalo.net/@pikora_niconico" height="100%" target="_blank" rel="noopener">
            <Box component="img" src="https://voskey-s.icalo.net/res/voskey_icon.webp" height="100%" />
          </Link>
        </Box>
      </Box>
    </Box>
  )
};

export default Header;