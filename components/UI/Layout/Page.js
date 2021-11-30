import { jsx, css } from "@emotion/react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

import { Flex } from "@chakra-ui/layout";
import { Grid, GridItem } from "@chakra-ui/react";

const Page = (props) => {
  const { children } = props;
  return (
    <>
      <Grid
        h={"100vh"}
        templateRows="50px 1fr"
        templateColumns="repeat(5, 1fr)"
        mg={0}
        gap={8}
      >
        <GridItem rowSpan={2} colSpan={1} bg="blue" p={12}>
          <Navigation />
        </GridItem>
        <GridItem colSpan={4} bg="papayawhip" />

        <GridItem colSpan={4} bg="tomato">
          {children}
        </GridItem>
      </Grid>
    </>
  );
};

export default Page;

{
  /* <Grid
bg={"blue"}
vw={100}
vh={100}
> */
}
{
  /* <Flex

  bg="red"
> */
}
{
  /* <Navigation /> */
}
{
  /* </Flex> */
}
{
  /* <Grid
  item
  css={css`
    background-color: darkmagenta;
    display: flex;
    width: 100%;
  `}
> */
}
{
  /* {children} */
}
{
  /* <Grid item>{children}</Grid> */
}
{
  /* </Grid> */
}
{
  /* </Grid> */
}
