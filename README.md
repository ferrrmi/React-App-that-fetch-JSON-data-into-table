# React App Fetch JSON Data into Table

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Example JSON Data
```json
[
    {
       "hostname":"xxxclient",
       "data":[
          {
             "filesystem":"/dev/sda2",
             "type":"ext4",
             "size":"468G",
             "used":"25G",
             "avail":"420G",
             "use":"6%",
             "mount":"/"
          }
       ]
    },
    {
       "hostname":"xxxxclient2",
       "data":[
          {
             "filesystem":"/dev/sda2",
             "type":"ext4",
             "size":"468G",
             "used":"130G",
             "avail":"315G",
             "use":"30%",
             "mount":"/"
          }
       ]
    },
    {
       "hostname":"xxxxclient3",
       "data":[
          {
             "filesystem":"/dev/nvme0n1p2",
             "type":"ext4",
             "size":"916G",
             "used":"45G",
             "avail":"825G",
             "use":"6%",
             "mount":"/"
          }
       ]
    }
  ]