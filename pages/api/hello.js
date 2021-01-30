const hello = (req, res) =>  {
    res.status(200).json({text: 'Hello World'});
}

export default hello;
