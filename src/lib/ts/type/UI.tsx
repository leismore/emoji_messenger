type UI = 
{
  "app": {
    "name":   string,
    "slogan": string
  },

  "form":
  {
    "text":
    {
      "label":       string,
      "help":        string,
      "placeholder": string
    },

    "password":
    {
      "label": string,
      "help":  string
    },

    "checkboxAppendURL":
    {
      "label": string
    },

    "messengerClipboard":
    {
      "message": string
    },

    "button":
    {
      "encrypt":
      {
        "label": string
      },

      "decrypt":
      {
        "label": string
      },

      "toClipboard":
      {
        "label": string
      },

      "fromClipboard":
      {
        "label": string
      }
    }
  },

  "donation": {
    "label": string
  },

  "leismore": {
    "name": string
  },

  "license": {
    "name": string
  }
};

export default UI;
