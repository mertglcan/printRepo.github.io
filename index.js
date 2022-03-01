var ticketNo = $('#ticketNo').val();
var tourName = $('#tourName').val();
var date = $('#date').val();
var dayTime = $('#dayTime').val();
var hotel = $('#hotel').val();
var room = $('#room').val();
var pax = $('#pax').val();
var namePhone = $('#namePhone').val();
var note = $('#note').val();
var totalAmount = $('#totalAmount').val();
var rest = $('#rest').val();


$('#printButton').click(function () {
    BluetoothPrinter.connect()
        .then(() => {
            document.body.classList.add('connected');

            let encoder = new EscPosEncoder();

            encoder
                .initialize()
                .codepage('cp437')
                .bold()
                .text('test1')
                .bold()
                .newline()
                .text('satir2')
                .size('small')
                .newline()
                .size('normal');



            let command = encoder.encode();

            // console.hex(command);

            BluetoothPrinter.print(command);
        });
});