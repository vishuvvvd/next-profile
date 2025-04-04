export const header = {
  height: { xs: "70px", md: "50px" },
  py: 0.2,
  px: 2,
  position: { xs: "absolute", md: "sticky" },
  bottom: { xs: 0, md: "unset" },
  top: { xs: "unset", md: 0 },
  left: { xs: 0 },
  right: { xs: 0 },
  ".app-logo": {
    pt: 0.2,
    display: { xs: "none", sm: "block" },
  },
  ".menu-list-conatiner": {
    display: "flex",
    justifyContent: "center",
    ".menu-list-grid": {
      gap: { xs: 3, sm: 6, md: 6 },
      ".menu-list-item": {
        cursor: "pointer",
        justifyItems: { xs: "center", md: "baseline" },
        display: { xs: "block", md: "flex" },
        ".menu-item-label": {
          mt: { xs: 0, md: 0.4 },
          ml: { xs: 0, md: 0.5 },
          fontSize: { xs: ".688rem", sm: ".875", md: "1rem" },
          lineHeight: { xs: "1.03rem", md: "1.25rem" },
        },
      },
    },
  },
  ".user-profile": {
    //TODO:: will be used once i start with user management
    display: { xs: "none", sm: "none" },
  },
};
