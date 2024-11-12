import { Chip, Skeleton, Stack } from "@mui/material";
import { Flex } from "../Products/styles";
import { Skeletito } from "./styles";

export const TestMaterial = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      messi="20px"
    >
      <h1>Holis</h1>
      <Chip label="Messi" />
      <Stack spacing={1}>
        <Skeletito sx={{ background: "crimson" }} />
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    </Flex>
  );
};
