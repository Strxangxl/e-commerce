import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { AppBar, Box, Toolbar, IconButton, Typography, Menu,
		Container, Avatar, Button, Tooltip, MenuItem } from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
	const [nav, setNav] = useState(null)
	
	const pages = ["Home", "New Arrivals", "RGB", "Small", "All", ]

	const handleOpen = (e) => {
		setNav(e.currentTarget)
	}
	const handleClose = () => {
		setNav(null)
	}

	return(
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar>
					<Typography variant="h6" component="a" href="/" noWrap
						sx={{
							display: { xs: 'none', md: 'flex' },
							fontWeight: 700,
							color: 'inherit',
							textDecoration: 'none'
						}}>
						Keybs.
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton color="inherit" size="large" onClick={handleOpen}>
							<MenuIcon />
						</IconButton>
						<Menu sx={{ xs: 'block', md: 'none' }} anchorEl={nav}
							open={Boolean(nav)} onClick={handleClose}>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleClose}>
                  					<Typography textAlign="center">{page}</Typography>
                				</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography variant="h6" component="a" href="/" noWrap
						sx={{
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontWeight: 700,
							color: 'inherit',
							textDecoration: 'none'
						}}>Keybs.
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<NavLink to={`/${page}`} key={page}>
								<Button onClick={handleClose}
									sx={{
										my: 2,
										color: 'white',
									}}>
									{page}
								</Button>
							</NavLink>
						))}
					</Box>
					<IconButton color="inherit">
						<NavLink to="/cart" style={{ color: 'white' }}>
							<ShoppingCartIcon />
						</NavLink>
					</IconButton>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Header;