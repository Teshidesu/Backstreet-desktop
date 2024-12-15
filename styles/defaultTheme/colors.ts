const colors = {
  background: "#C0C0C0", // A typical Windows 95/98 grayish background
  fileEntry: {
    background: "#A0A0A0", // A neutral gray background for file entries
    backgroundFocused: "#B0B0B0", // Lighter gray for focused entry
    backgroundFocusedHover: "#C0C0C0", // Slightly lighter on hover
    border: "#505050", // Darker gray for borders
    borderFocused: "#808080", // Focused border slightly lighter
    borderFocusedHover: "#A0A0A0", // Hover effect on border
    text: "#000000", // Black text for good contrast
    textShadow: `
      0 0 1px rgba(0, 0, 0, 50%), // Subtle shadow for text
      0 0 2px rgba(0, 0, 0, 30%)`, // A bit more subtle shadow
  },
  highlight: "#FF80FF", // Bright pinkish highlight (retro feel)
  progress: "#00BFFF", // Bright cyan for progress
  progressBackground: "#C0C0C0", // A muted gray for progress background
  progressBarRgb: "rgb(0, 191, 255)", // Bright cyan for the progress bar
  selectionHighlight: "#FFFF00", // Classic yellow selection highlight
  selectionHighlightBackground: "#B0B0B0", // Slightly darker background for selection
  taskbar: {
    active: "#404040", // Dark taskbar background
    activeForeground: "#FFFFFF", // White text for taskbar active state
    ai: {
      balanced: ["rgb(255, 255, 0)", "rgb(0, 0, 255)", "rgb(0, 255, 255)"], // Retro neon colors for AI
      creative: [
        "rgb(255, 105, 180)", // Hot pink for creativity
        "rgb(255, 165, 0)", // Orange for creativity
        "rgb(255, 20, 147)", // Deep pink for creativity
      ],
      precise: ["rgb(135, 206, 235)", "rgb(0, 191, 255)", "rgb(240, 248, 255)"], // Soft blues for precision
    },
    background: "#303030", // Darker taskbar background
    button: {
      color: "#FFFFFF", // White buttons
    },
    foreground: "#A0A0A0", // Lighter gray for text on taskbar
    foregroundHover: "#D0D0D0", // Slightly brighter on hover
    foregroundProgress: "#C0C0C0", // Light gray for progress
    hover: "#808080", // Gray hover effect
    peekBorder: "#505050", // Dark border for peek
  },
  text: "#FFFFFF", // Black text
  titleBar: {
    background: "#000080", // Classic blue title bar
    backgroundHover: "#0000CD", // Lighter blue on hover
    backgroundInactive: "#808080", // Inactive window title bar gray
    buttonInactive: "#A9A9A9", // Inactive button gray
    closeHover: "#FF6347", // Tomato color for close button hover
    text: "#FFFFFF", // White text on title bar
    textInactive: "#A0A0A0", // Inactive window text gray
  },
  window: {
    background: "#D3D3D3", // Lighter gray for the window background
    outline: "#808080", // Border outline color
    outlineInactive: "#A0A0A0", // Lighter border for inactive windows
    shadow: "0 0 5px 2px rgba(0, 0, 0, 30%)", // Soft shadow for active windows
    shadowInactive: "0 0 5px 1px rgba(0, 0, 0, 20%)", // Subtle shadow for inactive windows
  },
};

export default colors;
