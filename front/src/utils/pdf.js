import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { _fonts } from '@/utils/font';
import { formatter } from '@/utils/formatter';

function makePdf(quoteObj, userObj, clientObj, productsArr) {
  // pdf 옵션
  let doc = new jsPDF('p', 'mm', 'a4');

  // 폰트 설정
  doc.addFileToVFS('malgun.ttf', _fonts);
  doc.addFont('malgun.ttf', 'malgun', 'normal');
  doc.setFont('malgun');

  // 견적 상단
  doc.setFontSize(30);
  console.log(doc.getFontList());
  doc.text('견 적 서', 105, 25, 'center');
  doc.setLineWidth(2);
  doc.line(15, 31, 195, 31);

  // 수신인
  doc.setFontSize(12);
  doc.text(15, 50, `${clientObj.companyName}`);
  doc.setFontSize(14);
  doc.text(15, 60, `${clientObj.clientName}   귀하`);

  doc.setLineWidth(0.3);
  doc.line(15, 63, 80, 63);

  doc.setFontSize(11);
  doc.text(15, 84, `견적일자 : ${quoteObj.quoteDate}`);
  doc.text(15, 90, `견적번호 : ${quoteObj.quoteNumber}`);

  doc.setFontSize(8);
  doc.text(15, 98, `아래와 같이 견적합니다.`);

  // 공급자
  doc.setFontSize(11);
  autoTable(doc, {
    styles: { font: 'malgun', fontStyle: 'normal' },
    margin: { top: 0, bottom: 0, left: 102, right: 0 },
    theme: 'plain',
    startY: 45,
    headStyles: {
      halign: 'center',
      valign: 'middle',
      textColor: [0, 0, 0],
      fillColor: [240, 240, 240],
    },
    columnStyles: {
      0: {
        halign: 'left',
        cellWidth: 28,
        fillColor: [250, 250, 250],
      },
      1: {
        halign: 'left',
        cellWidth: 65,
        fillColor: [250, 250, 250],
      },
    },
    head: [[{ content: '공급자', colSpan: 2 }]],
    body: [
      ['상호', userObj.companyName],
      ['사업자등록번호', userObj.companyRegiNum],
      ['담당자', userObj.userName],
      ['이메일', userObj.email],
      ['전화번호', userObj.telephoneNum],
      ['주소', userObj.companyAddress],
    ],
  });

  // 견적 총 금액
  doc.setFontSize(18);
  doc.text(15, 117, `총 견적 금액 :  ${formatter.format(quoteObj.amount)}`);

  // 견적 테이블
  doc.setFontSize(10);
  autoTable(doc, {
    styles: {
      font: 'malgun',
      fontStyle: 'normal',
    },

    headStyles: {
      halign: 'center',
      valign: 'middle',
      fillColor: [0, 0, 0],
    },
    columnStyles: {
      0: { halign: 'left', cellWidth: 65 },
      1: { halign: 'right' },
      2: { halign: 'right' },
      3: { halign: 'right' },
      4: { halign: 'right' },
      5: { halign: 'right' },
      6: { halign: 'right' },
    },
    margin: { top: 5 },
    startY: 125,
    head: [['품목', '수량', '단가', 'VAT(%)', '공급가액', '세액', '합']],
    body: productsArr,
  });

  // 비고
  doc.text(15, doc.lastAutoTable.finalY + 20, `비고`);
  doc.setLineWidth(0.3);
  doc.line(
    15,
    doc.lastAutoTable.finalY + 23,
    195,
    doc.lastAutoTable.finalY + 23,
  );
  doc.text(15, doc.lastAutoTable.finalY + 28, quoteObj.note);

  // 다운로드(파일명)
  doc.save('quotation.pdf');
}

export { makePdf };
