/* eslint-disable react/prop-types */

import { Drawer } from "@mui/material";
import SidebarContent from "./SidebarContent";

const Sidebar = ({ isOpen, handleToggle }) => {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" }, // Hide on mobile
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#fff",
          },
        }}
        open
      >
        <SidebarContent />
      </Drawer>

      {/* Temporary Drawer for mobile */}
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={handleToggle}
        ModalProps={{ keepMounted: true }} // Improves performance on mobile
        sx={{
          backgroundColor: "#7091E6",
          display: { xs: "block", sm: "none" }, // Only show on mobile
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <SidebarContent />
      </Drawer>
    </>
  );
};

export default Sidebar;
