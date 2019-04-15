const dotenv = require("dotenv");
const Bot = require("@dlghq/dialog-bot-sdk");
const Rpc = require("@dlghq/dialog-bot-sdk");
const {
  MessageAttachment,
  ActionGroup,
  Action,
  Button,
  Select,
  SelectOption,
  UUID,
  OutPeer
} = require("@dlghq/dialog-bot-sdk");
const { flatMap } = require("rxjs/operators");
const axios = require("axios");
const { merge } = require("rxjs");
const moment = require("moment");
var _ = require("lodash");
const scheduleOptions = [
  {
    label: "12:37 pm",
    value: "12:37 pm"
  },
  {
    label: "8:00 pm",
    value: "8:00 pm"
  },
  {
    label: "9:00 pm",
    value: "9:00 pm"
  },
  {
    label: "10:00 pm",
    value: "10:00 pm"
  },
  {
    label: "11:00 pm",
    value: "11:00 pm"
  }
];
var mentions = [
  { group: "test_group", text: "hey", time: "10:00 AM" },
  { group: "test_group", text: "hey there", time: "10:00 AM" },
  { group: "test_group_1", text: "hey", time: "10:00 AM" },
  { group: "test_group_1", text: "hey", time: "10:00 AM" }
];

console.log("mentions");
console.log("MENTIONS", mentions);
groups = [];

mentions.map(mention => {
  if (!_.includes(groups, mention.group)) {
    groups.push(mention.group);
  }
});
console.log("group", groups);

groups.map(group => {
  var mentionsInGroup = _.filter(mentions, { group: group });
  var textToBot = `\n @${group} \n`;
  mentionsInGroup.map(mention => {
    textToBot += mention.time + ":" + mention.text + "\n";
  });

  var messageToSend = {
    text: textToBot
  };

  console.log(messageToSend);
  // sendTextToBot(bot, messageToSend);
});

//general functions
