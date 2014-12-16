Template.events.helpers({
    options: function() {
        return {
            header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: true,
			events: [
				{
					title: 'today',
					start: '2014-12-02'
				}
				]
        };
    }
});