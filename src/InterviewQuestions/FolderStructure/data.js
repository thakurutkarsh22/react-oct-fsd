const folderStructure = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "home",
      isFolder: false,
    },
    {
      name: "user",
      isFolder: true,
      items: [
        {
          name: "utkasrh",
          isFolder: true,
          items: [
            {
              name: "afile.txt",
              isFolder: false,
            },
            {
              name: "Bfile.txt",
              isFolder: false,
            },
            {
              name: "Cfile.txt",
              isFolder: false,
            },
          ],
        },
        {
          name: "akash",
          isFolder: true,
          item: [],
        },
      ],
    },
    {
      name: "system",
      isFolder: false,
    },
  ],
};

export default folderStructure;
