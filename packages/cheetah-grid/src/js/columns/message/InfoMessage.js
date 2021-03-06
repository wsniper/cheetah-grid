'use strict';

const BaseMessage = require('./BaseMessage');
const MessageElement = require('./internal/MessageElement');
const messageUtils = require('./messageUtils');

const GREY_L2 = '#e0e0e0';

class InfoMessage extends BaseMessage {
	createMessageElementInternal() {
		return new MessageElement();
	}
	drawCellMessageInternal(message, context, style, helper, info) {
		const {bgColor} = style;
		const {selected} = context.getSelectState();

		helper.drawBorderWithClip(context, (ctx) => {
			if (!selected) {
				messageUtils.drawInfomationMarkBox(context, {
					bgColor: GREY_L2,
					color: bgColor,
				}, helper);
			}
		});
	}
}

module.exports = InfoMessage;