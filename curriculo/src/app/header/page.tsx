'use client';

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          position: "relative",
          top: "-8px",
          width: "auto",
          marginLeft: "-10px",
          marginRight: "-10px",
        }}
      >
        <Toolbar>
          <Stack spacing={10} direction="row">
            <Link href="/" passHref>
              <Button variant="contained">Desafio</Button>
            </Link>
          </Stack>
          <Stack spacing={1} direction="row">
            <Link href="/portfolio" passHref>
            <Button variant="contained">Portfolio</Button>
            </Link>
          </Stack>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
