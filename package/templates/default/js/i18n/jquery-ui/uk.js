jQuery(function($){
	$.datepicker.regional['uk'] = {
		clearText: 'Очистити', clearStatus: '',
		closeText: 'Закрити', closeStatus: '',
		prevText: '&#x3c;Попередній',  prevStatus: '',
		prevBigText: '&#x3c;&#x3c;', prevBigStatus: '',
		nextText: 'Наступний&#x3e;', nextStatus: '',
		nextBigText: '&#x3e;&#x3e;', nextBigStatus: '',
		currentText: 'Сьогодні', currentStatus: '',
		monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень',
		'Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
		monthNamesShort: ['Січ','Лют','Бер','Квіт','Трав','Черв',
		'Лип','Серп','Вер','Жовт','Лист','Груд'],
		monthStatus: '', yearStatus: '',
		weekHeader: 'Не', weekStatus: '',
		dayNames: ['неділя','понеділок','вівторок','середа','четвер','пʼятниця','субота'],
		dayNamesShort: ['нед','пон','втр','срд','чтв','птн','суб'],
		dayNamesMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
		dayStatus: 'DD', dateStatus: 'D, M d',
		dateFormat: 'dd.mm.yy', firstDay: 1,
		initStatus: '', isRTL: false};
	$.datepicker.setDefaults($.datepicker.regional['uk']);
});
