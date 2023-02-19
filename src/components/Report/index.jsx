import { Box, Typography } from "@mui/material";
import { BoxShadow } from "../BoxShadow";
import Index from "../DialogNewReport";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "60px",
    height: "300px",
    padding: "24px 0",

    backgroundColor: "#FFFFFF",
  },

  framework: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",
    backgroundColor: "#D9D9D9",
    width: "302px",
    height: "169px",
    borderRadius: "8px",
  },

  square: {
    height: "48px",
    width: "57px",
    backgroundColor: "#A5A5A5",
  },
  typography: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#000000",
  },
};

const ReportPage = () => {
  return (
     <>
    <Box sx={styles.container}>
      <Box sx={styles.framework}>
        <Box sx={styles.square} />
        <Typography sx={styles.typography}>SEBI report</Typography>
      </Box>

      <Box sx={styles.framework}>
        <Box sx={styles.square} />
        <Typography sx={styles.typography}>GRI report</Typography>
      </Box>

      <BoxShadow content={<Index/>}>
      <Box sx={styles.framework}>
        <Box sx={styles.square} />
        <Typography sx={styles.typography}>Customize report</Typography>
      </Box>
      </BoxShadow>

    </Box>
   </>
  );
};
export default ReportPage;
