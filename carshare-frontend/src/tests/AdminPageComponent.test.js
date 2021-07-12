import React from 'react'
import { shallow, mount } from 'enzyme';
import AdminPageComponent from '../components/AdminPageComponent'
import '../setupTests'
import {Button, ButtonGroup} from 'react-bootstrap';
import MapComponent from '../components/MapComponent'
import MaterialTable from 'material-table';

describe('<HomeComponent />', () => {
    it('renders the page', () => {
        const editor = shallow(<AdminPageComponent />);
        expect(editor.find('div').length).toEqual(2);
    })

    it('render ButtonGroup', () => {
        const editor = shallow(<AdminPageComponent />);
        expect(editor.find(ButtonGroup).length).toEqual(1);
    })
    
    it('Button Group have 2 Buttons for users and issues', () => {
        const editor = shallow(<AdminPageComponent />);
        expect(editor.find(Button).length).toEqual(2);
    })

    it(' Render a table to show issues or users', () => {
        const editor = shallow(<AdminPageComponent />);
        expect(editor.find(MaterialTable).length).toEqual(1);
    })

    it('render issue', () => {
        const editor = shallow(<AdminPageComponent/>);

        editor.setState({issues: [
            {
                'issueId': 1241512312, 
                'bookingId': 1241251, 
                'carId' : 'C002', 
                'solved': false
            }
        ]})

        const expected =
            '<div class="MuiPaper-root MuiPaper-elevation2 MuiPaper-rounded" style="position:relative"><div class="MuiToolbar-root MuiToolbar-regular MTableToolbar-root-5 MuiToolbar-gutters"><div class="MTableToolbar-title-9"><h6 class="MuiTypography-root MuiTypography-h6" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Issues List</h6></div><div class="MTableToolbar-spacer-7"></div><div class="MuiFormControl-root MuiTextField-root MTableToolbar-searchField-10"><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl MuiInputBase-adornedStart MuiInputBase-adornedEnd"><div class="MuiInputAdornment-root MuiInputAdornment-positionStart"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true" title="Search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div><input type="text" aria-invalid="false" placeholder="Search" value="" aria-label="Search" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart MuiInputBase-inputAdornedEnd"/><div class="MuiInputAdornment-root MuiInputAdornment-positionEnd"><button class="MuiButtonBase-root MuiIconButton-root Mui-disabled Mui-disabled" tabindex="-1" type="button" disabled="" aria-label="Clear Search"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true" aria-label="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></span></button></div></div></div><div class="MTableToolbar-actions-8"><div><div><span></span></div></div></div></div><div class="Component-horizontalScrollContainer-12" style="overflow-x:auto;position:relative"><div><div style="overflow-y:auto"><div><table class="MuiTable-root" style="table-layout:auto"><thead class="MuiTableHead-root"><tr class="MuiTableRow-root MuiTableRow-head"><th class="MuiTableCell-root MuiTableCell-head MTableHeader-header-13 MuiTableCell-alignLeft" scope="col" style="background-color:rgb(145 195 234);color:black;font-weight:600;box-sizing:border-box;width:calc((0px - (0px)) / 4)"><span class="MuiButtonBase-root MuiTableSortLabel-root" tabindex="0" role="button" aria-disabled="false"><div data-rbd-draggable-context-id="0" data-rbd-draggable-id="0" tabindex="0" role="button" aria-describedby="rbd-hidden-text-0-hidden-text-0" data-rbd-drag-handle-draggable-id="0" data-rbd-drag-handle-context-id="0" draggable="false">Issue ID</div><svg class="MuiSvgIcon-root MuiTableSortLabel-icon MuiTableSortLabel-iconDirectionAsc" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg></span></th><th class="MuiTableCell-root MuiTableCell-head MTableHeader-header-13 MuiTableCell-alignLeft" scope="col" style="background-color:lightblue;color:black;font-weight:600;box-sizing:border-box;width:calc((0px - (0px)) / 4)"><span class="MuiButtonBase-root MuiTableSortLabel-root" tabindex="0" role="button" aria-disabled="false"><div data-rbd-draggable-context-id="0" data-rbd-draggable-id="1" tabindex="0" role="button" aria-describedby="rbd-hidden-text-0-hidden-text-0" data-rbd-drag-handle-draggable-id="1" data-rbd-drag-handle-context-id="0" draggable="false">Booking ID</div><svg class="MuiSvgIcon-root MuiTableSortLabel-icon MuiTableSortLabel-iconDirectionAsc" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg></span></th><th class="MuiTableCell-root MuiTableCell-head MTableHeader-header-13 MuiTableCell-alignLeft" scope="col" style="background-color:lightblue;color:black;font-weight:600;box-sizing:border-box;width:calc((0px - (0px)) / 4)"><span class="MuiButtonBase-root MuiTableSortLabel-root" tabindex="0" role="button" aria-disabled="false"><div data-rbd-draggable-context-id="0" data-rbd-draggable-id="2" tabindex="0" role="button" aria-describedby="rbd-hidden-text-0-hidden-text-0" data-rbd-drag-handle-draggable-id="2" data-rbd-drag-handle-context-id="0" draggable="false">Car ID</div><svg class="MuiSvgIcon-root MuiTableSortLabel-icon MuiTableSortLabel-iconDirectionAsc" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg></span></th><th class="MuiTableCell-root MuiTableCell-head MTableHeader-header-13 MuiTableCell-alignLeft" scope="col" style="background-color:lightblue;color:black;font-weight:600;box-sizing:border-box;width:calc((0px - (0px)) / 4)"><span class="MuiButtonBase-root MuiTableSortLabel-root" tabindex="0" role="button" aria-disabled="false"><div data-rbd-draggable-context-id="0" data-rbd-draggable-id="3" tabindex="0" role="button" aria-describedby="rbd-hidden-text-0-hidden-text-0" data-rbd-drag-handle-draggable-id="3" data-rbd-drag-handle-context-id="0" draggable="false">Solved</div><svg class="MuiSvgIcon-root MuiTableSortLabel-icon MuiTableSortLabel-iconDirectionAsc" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg></span></th><th class="MuiTableCell-root MuiTableCell-head MTableHeader-header-13 MuiTableCell-paddingCheckbox" scope="col" style="background-color:lightblue;color:black;font-weight:600;width:48px;text-align:center;box-sizing:border-box"><span class="MuiButtonBase-root MuiTableSortLabel-root Mui-disabled" tabindex="-1" role="button" aria-disabled="true">Actions</span></th></tr></thead><tbody class="MuiTableBody-root"><tr class="MuiTableRow-root MuiTableRow-hover" index="0" level="0" path="0" style="transition:all ease 300ms;background-color:#FFF;cursor:pointer"><td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft" style="color:inherit;width:calc((0px - (0px)) / 4);box-sizing:border-box;font-size:inherit;font-family:inherit;font-weight:600"></td><td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft" value="1241251" style="color:inherit;width:calc((0px - (0px)) / 4);box-sizing:border-box;font-size:inherit;font-family:inherit;font-weight:inherit">1241251</td><td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft" value="C002" style="color:inherit;width:calc((0px - (0px)) / 4);box-sizing:border-box;font-size:inherit;font-family:inherit;font-weight:inherit">C002</td><td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft" value="false" style="color:inherit;width:calc((0px - (0px)) / 4);box-sizing:border-box;font-size:inherit;font-family:inherit;font-weight:inherit"><span class="unsolved-text">UNSOLVED</span></td><td class="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone" style="width:48px;padding:0px 5px;box-sizing:border-box"><div style="display:flex"><button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit" tabindex="0" type="button" title="Solve This Issue"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></svg></span></button></div></td></tr><tr class="MuiTableRow-root" style="height:49px"></tr><tr class="MuiTableRow-root" style="height:49px"></tr><tr class="MuiTableRow-root" style="height:49px"></tr><tr class="MuiTableRow-root" style="height:49px"></tr><tr class="MuiTableRow-root" style="height:1px"></tr></tbody></table></div></div></div></div><table class="MuiTable-root"><tfoot class="MuiTableFooter-root" style="display:grid"><tr class="MuiTableRow-root MuiTableRow-footer"><td class="MuiTableCell-root MuiTableCell-footer MuiTablePagination-root Component-paginationRoot-1" colSpan="3" style="float:right;overflow-x:auto" icons="[object Object]"><div class="MuiToolbar-root MuiToolbar-regular MuiTablePagination-toolbar Component-paginationToolbar-2 MuiToolbar-gutters"><div class="MuiTablePagination-spacer"></div><p class="MuiTypography-root MuiTablePagination-caption Component-paginationCaption-3 MuiTypography-body2 MuiTypography-colorInherit">Rows per page:</p><div class="MuiInputBase-root MuiTablePagination-input MuiTablePagination-selectRoot Component-paginationSelectRoot-4"><div class="MuiSelect-root MuiSelect-select MuiTablePagination-select MuiSelect-selectMenu MuiInputBase-input" tabindex="0" role="button" aria-haspopup="listbox"><div style="padding:0px 5px">5 rows </div></div><input value="5" aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput"/><svg class="MuiSvgIcon-root MuiSelect-icon MuiTablePagination-selectIcon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg></div><p class="MuiTypography-root MuiTablePagination-caption Component-paginationCaption-3 MuiTypography-body2 MuiTypography-colorInherit">1-1 of 1</p><div class="MTablePaginationInner-root-14"><span title="First Page" class=""><button class="MuiButtonBase-root MuiIconButton-root Mui-disabled Mui-disabled" tabindex="-1" type="button" disabled=""><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></svg></span></button></span><span title="Previous Page" class=""><button class="MuiButtonBase-root MuiIconButton-root Mui-disabled Mui-disabled" tabindex="-1" type="button" disabled=""><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg></span></button></span><span class="MuiTypography-root MuiTypography-caption" style="flex:1;text-align:center;align-self:center;flex-basis:inherit">1-1 of 1</span><span title="Next Page" class=""><button class="MuiButtonBase-root MuiIconButton-root Mui-disabled Mui-disabled" tabindex="-1" type="button" disabled=""><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg></span></button></span><span title="Last Page" class=""><button class="MuiButtonBase-root MuiIconButton-root Mui-disabled Mui-disabled" tabindex="-1" type="button" disabled=""><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></svg></span></button></span></div></div></td></tr></tfoot></table></div>'
        const realOutput = editor.find(MaterialTable).html();
        // console.log(realOutput);
        expect(realOutput.indexOf(expected) > -1).toEqual(true);
    })

    it('issue and users buttons', () => {
        const mockCallBack = jest.fn();

        const button = shallow((<Button onClick={mockCallBack}>Issues</Button>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
        const button2 = shallow((<Button onClick={mockCallBack}>Users</Button>));
        button2.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(2);
    })
});