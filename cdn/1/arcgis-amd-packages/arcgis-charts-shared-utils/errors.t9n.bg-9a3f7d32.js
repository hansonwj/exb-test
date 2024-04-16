define(["exports"],(function(e){"use strict";const t="Възникна грешка при зареждането на диаграмата.",i="Има общо ${ elementCount } ленти в тази диаграма. Лентовите диаграми с една серия са лимитирани до ${ totalLimit } ленти. Изберете поле за категория с по-малко уникални стойности или приложете филтър към данните си.",a="Лентовите диаграми с две серии са лимитирани до ${ totalLimit } ленти или ${ seriesLimit } за серия. Изберете поле за категория с по-малко уникални стойности или приложете филтър към данните си.",n="Лентовите диаграми с три серии са лимитирани до ${ totalLimit } ленти или ${ seriesLimit } за серия. Изберете поле за категория с по-малко уникални стойности или приложете филтър към данните си.",o="Лентовите диаграми са ограничени до ${ seriesLimit } серии. Изберете Разделяне по поле с по-малко уникални стойности",r="Възникна грешка при създаването на диаграмата.",s="Не може да се приложи логаритмична трансформация към отрицателни или нулеви стойности.",m="Не може да се приложи трансформация с квадратен корен към отрицателни стойности.",u="Възникна грешка при зареждането на слоя. URL = ${ url }. ИД на елемент на портал = ${ portalItemId }.",d="${ dataPath } трябва да бъде унукално. Серията с името ${ seriesName } има ИД (${ seriesID }), който вече се използва от друга серия.",l="${ dataPath } не може да се извършва обобщение, различно от обобщение на брой, за нецифрово поле.",C="${ dataPath } няма име на свойство ${ missingProperty }.",L="${ dataPath } не трябва да има по-малко от ${ limit } символи.",$="${ dataPath } не трябва да има по-малко от ${ limit } елементи.",c="${ dataPath } не трябва да има повече от ${ limit } елементи.",x="${ dataPath } трябва да има поне един символ, който не е интервал.",E="${ dataPath } не трябва да бъде ${ additionalProperty }.",S="${ dataPath } трябва да бъде равна на една от тези позволени стойности: ${ allowedValues }.",h="${ dataPath }трябва да съответства на схемата на една от тези: ${ schemaOptions }.",P="Не се поддържат диаграми на разсейване с пропорционални символи. Използван е размер на символа по подразбиране.",g="Входните данни не могат да се прочетат.",p="Хистограмите изискват поне две числови стойности.",y="Очакваният тип серия в индекс${ seriesIndex } е „${ expectedType }“, но „${ receivedType }“ е получен вместо това",v="Уверете се, че сборът на избраното числово поле(-та) връща всички положителни стойности или всички отрицателни стойности.",I="Има общо${ sliceCount } секции в тази диаграма. Кръговата диаграма е ограничена до ${ totalLimit } секции. Изберете поле за категория с по-малко уникални стойности, добавете по-малко цифрови полета, или приложете филтър към данните си.",f="Базираните на функции измервателни уреди са ограничени до ${ totalLimit }функции. Филтрирайте данните си.",b="В тази диаграма има общо ${ elementCount } маркера. Линейните диаграми с една серия са ограничени до ${ totalLimit } маркера. Изберете поле за категория с по-малко уникални стойности или приложете филтър към вашите данни.",q="Линейните диаграми с две серии са ограничени до ${ totalLimit } маркера или ${ seriesLimit } маркера на серия. Изберете поле за категория с по-малко уникални стойности или приложете филтър към вашите данни.",B="Линейните диаграми с три или повече серии са ограничени до ${ totalLimit } маркера или ${ seriesLimit } маркера на серия. Изберете поле за категория с по-малко уникални стойности или приложете филтър към вашите данни.",V="Линейните диаграми са ограничени до ${ seriesLimit } серии. Изберете Разделяне по поле с по-малко уникални стойности",w="В тази диаграма има общо ${ elementCount } карета. Каре диаграмите с една серия са ограничени до ${ totalLimit } карета. Изберете поле за категория с по-малко уникални стойности или приложете филтър към вашите данни.",F="Каре диаграмите с две серии са ограничени до ${ totalLimit } карета или ${ seriesLimit } карета на серия. Изберете поле за категория с по-малко уникални стойности или приложете филтър към вашите данни.",T="Каре диаграмите с три или повече серии са ограничени до ${ totalLimit } карета или ${ seriesLimit } карета на серия. Изберете поле за категория с по-малко уникални стойности или приложете филтър към вашите данни.",D="Каре диаграмите са ограничени до ${ seriesLimit } серии. Изберете Разделяне по поле с по-малко уникални стойности",O="Каре диаграмите могат да показват само до ${ totalLimit } точките на отклонение. Филтрирайте данните си.";var N={defaultError:t,uniqueSeriesBarCountCannotExceedLimit:i,twoSeriesBarCountCannotExceedLimit:a,threePlusSeriesBarCountCannotExceedLimit:n,barSeriesCountCannotExceedLimit:o,defaultInvalidChart:r,negativeValueInDataForLogTransformation:s,negativeValueInDataForSqrtTransformation:m,layerLoadFailure:u,duplicateSeriesID:d,nonNumericAggregation:l,requiredProperty:C,minLength:L,minItems:$,maxItems:c,whiteSpacePattern:x,additionalProperty:E,enumValues:S,anyOfValues:h,bubbleChartValidateMsg:P,queryError:g,histogramEmptyField:p,invalidSeriesType:y,or:"или",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:v,pieChartSlicesCannotExceedLimit:I,gaugeCannotExceedLimit:f,uniqueSeriesLineCountCannotExceedLimit:b,twoSeriesLineCountCannotExceedLimit:q,threePlusSeriesLineCountCannotExceedLimit:B,lineSeriesCountCannotExceedLimit:V,uniqueSeriesBoxCountCannotExceedLimit:w,twoSeriesBoxCountCannotExceedLimit:F,threePlusBoxLineCountCannotExceedLimit:T,boxSeriesCountCannotExceedLimit:D,boxSeriesOutlierCannotExceedLimit:O};e.additionalProperty=E,e.anyOfValues=h,e.barSeriesCountCannotExceedLimit=o,e.boxSeriesCountCannotExceedLimit=D,e.boxSeriesOutlierCannotExceedLimit=O,e.bubbleChartValidateMsg=P,e.default=N,e.defaultError=t,e.defaultInvalidChart=r,e.duplicateSeriesID=d,e.enumValues=S,e.gaugeCannotExceedLimit=f,e.histogramEmptyField=p,e.invalidSeriesType=y,e.layerLoadFailure=u,e.lineSeriesCountCannotExceedLimit=V,e.maxItems=c,e.minItems=$,e.minLength=L,e.negativeValueInDataForLogTransformation=s,e.negativeValueInDataForSqrtTransformation=m,e.nonNumericAggregation=l,e.or="или",e.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=v,e.pieChartSlicesCannotExceedLimit=I,e.queryError=g,e.requiredProperty=C,e.threePlusBoxLineCountCannotExceedLimit=T,e.threePlusSeriesBarCountCannotExceedLimit=n,e.threePlusSeriesLineCountCannotExceedLimit=B,e.twoSeriesBarCountCannotExceedLimit=a,e.twoSeriesBoxCountCannotExceedLimit=F,e.twoSeriesLineCountCannotExceedLimit=q,e.uniqueSeriesBarCountCannotExceedLimit=i,e.uniqueSeriesBoxCountCannotExceedLimit=w,e.uniqueSeriesLineCountCannotExceedLimit=b,e.whiteSpacePattern=x}));