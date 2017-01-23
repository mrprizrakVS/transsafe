import { SimpleSchema } from 'meteor/aldeed:simple-schema';

SimpleSchema.messages({
  required: "[label] є обов'язковим",
  minString: "[label] має містити щонайменше [min] символів",
  maxString: "[label] не може перевищувати [max] символів",
  minNumber: "[label] має бути не меншим, ніж [min]",
  maxNumber: "[label] має бути не більшим, ніж [max]",
  minDate: "[label] має бути не раніше, ніж [min]",
  maxDate: "[label] не може бути пізніше, ніж [max]",
  badDate: "[label] is not a valid date",
  minCount: "Ви повинні задати хоча б [minCount] значень",
  maxCount: "Ви не можете задати більше, ніж [maxCount] значень",
  noDecimal: "[label] має бути цілим числом",
  notAllowed: "[value] не є допустимим значенням",
  expectedString: "label] має бути стрічкою",
  expectedNumber: "[label] має бути числом",
  expectedBoolean: "[label] має бути булевим значенням",
  expectedArray: "[label] має бути масивом",
  expectedObject: "[label] має бути об'єктом",
  expectedConstructor: "[label] має відповідати типу [type]",
  regEx: [
    {msg: "[label] не відповідає заданим критеріям"},
    {exp: SimpleSchema.RegEx.Email, msg: "[label] має бути коректною e-mail адресою"},
    {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] має бути коректною e-mail адресою"},
    {exp: SimpleSchema.RegEx.Domain, msg: "[label] має бути коректним доменом"},
    {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] має бути коректним доменом"},
    {exp: SimpleSchema.RegEx.IP, msg: "[label] має бути коректною IPv4 або IPv6 адресою"},
    {exp: SimpleSchema.RegEx.IPv4, msg: "[label] має бути коректною IPv4 адресою"},
    {exp: SimpleSchema.RegEx.IPv6, msg: "[label] має бути коректною IPv6 адресою"},
    {exp: SimpleSchema.RegEx.Url, msg: "[label] має бути коректним URL"},
    {exp: SimpleSchema.RegEx.Id, msg: "[label] має бути коректним ідентифікатором"}
  ],
  keyNotInSchema: "[key] не дозволений для схеми"
});