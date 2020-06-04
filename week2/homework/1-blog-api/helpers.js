module.exports.isInvalid = function(req){
    if ( !req.body || !req.body.title || !req.body.content
    ) {
      return true;
    } else {
      return false;
    }
  }
  