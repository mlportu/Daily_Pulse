import React from 'react'
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton  from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../../Common/BasicMenu/BasicMenu';

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
    return(
       <div>
         <Tooltip  title={badgeContent ? newNotification : noNotifications} >
            <IconButton
                color={iconColor}
                onClick={badgeContent ? handleOpen : null}
                anchorEl={anchorEl}
        >
             <Badge 
                badgeContent={badgeContent} 
                color ="error">
                <NotificationsIcon/>
            </Badge>
            </IconButton>
        </Tooltip>
        <BasicMenu
            open={open} 
            anchorEl={anchorEl}
            handleClose={handleClose}
         />
      </div>
    )
}

export default NotificationBell
