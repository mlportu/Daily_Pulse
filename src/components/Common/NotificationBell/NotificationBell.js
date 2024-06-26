import React from 'react'
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton  from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../BasicMenu/BasicMenu';

const NotificationBell = ({iconColor, badgeContent}) => {
    const newNotification = `You have ${badgeContent} new notifications`
    const noNotifications = 'No new notifications'
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl]=React.useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }

    const notifications = [
        {
            id: 0,
            label: "First Notification"
        },
        {
            id: 1,
            label: "Second Notification"
        },
    ];

    return(
       <div>
         <Tooltip  title={notifications.length ? newNotification : noNotifications} >
            <IconButton
                color={iconColor}
                onClick={notifications.length ? handleOpen : null}
                anchorEl={anchorEl}
        >
             <Badge 
                badgeContent = {notifications.length} 
                color ="error">
                <NotificationsIcon/>
            </Badge>
            </IconButton>
        </Tooltip>
        <BasicMenu
            open={open} 
            anchorEl={anchorEl}
            handleClose={handleClose}
            menuItems={notifications}
         />
      </div>
    )
}

export default NotificationBell
