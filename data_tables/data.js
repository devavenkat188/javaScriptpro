new DataTable('#example');

/*$(document).ready(function() {
    $('#example').DataTable();

    render: function $(example,type,row) {
        return example.name + " " + example.position;
    }
    
}); */

$(document).ready(function() {
    $('#example').DataTable({
        columnDefs: [
            {
                targets: [0], // Assuming you want to apply this rendering to the first column
                render: function(data, type, row) {
                    // Custom rendering logic using the data, type, and row parameters
                    return row.name + " " + row.position;
                }
            }
        ]
    });
});

