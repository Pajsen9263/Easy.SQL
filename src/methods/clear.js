module.exports = function(db, params, options) {
  
  
  // Delete all Rows
  let fetched = db.query(`DELETE FROM ${options.table}`, function (error, results, fields) {
        return results;
    });
  if(!fetched) return null;
  
  // Return Amount of Rows Deleted
  //return fetched.changes;
  
}
