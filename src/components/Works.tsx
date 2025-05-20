import React from "react";
import Box from "@mui/material/Box";
import Work, { WorkData } from "./Work";
import works from "../data/works.json";

type WorksProps = {
  isUpSmall: boolean;
  isUpMedium: boolean;
};

const Works: React.FC<WorksProps> = ({ isUpSmall, isUpMedium }) => {
  return (
    <Box maxWidth="lg" mx="auto" my={2} px="8px">
      <Box
        component={isUpSmall ? "h1" : "h2"}
        textAlign="center"
        m={0}
        borderBottom="2px solid #222"
        mb={1}
        fontFamily='"M PLUS Rounded 1c"'
        fontWeight={700}
      >
        Works
      </Box>
      <Box>
        {works.map((work, idx) => {
          return (
            <Work
              data={work as WorkData}
              isUpSmall={isUpSmall}
              isUpMedium={isUpMedium}
              key={idx}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Works;
