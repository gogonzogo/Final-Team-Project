
import { Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { getArchiveDateinfo } from '../../redux/user/userOperations';
import { useDispatch, useSelector } from "react-redux";
import css from './ArchiveByDate.module.css';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import CustomButton from 'components/CustomButton/CustomButton';
import { ReactComponent as LogoSVG } from '../Logo/slimmom.svg';
import styles from '../Logo/ImageLogo.module.css';
import { setThemeMode } from "redux/theme/themeSlice";
import { selectThemeMode } from "redux/theme/themeSelectors";
import { restoreDairyArchive } from 'redux/user/userOperations';


function ArchiveByDate(props) {
    const [diaryinf, setDiaryinf] = useState(props.archivesData.archiveinfo)
    const userinfo = props.archivesData.userinfo
    const calcinfo = props.archivesData.calculatorInfo
    const [alldates, setAlldates] = useState(props.archivesData.archiveDates)
    const dispatch = useDispatch();
    const [archivePick, setArchivePick] = useState(0);
    const [showLogo, setShowLogo] = useState(false)
    const [showButton, setShowButton] = useState(true)
    const [isPrinting, setIsPrinting] = useState(false);
    const promiseResolveRef = useRef(null);
    const themeMode = useSelector(selectThemeMode);
    const printRef = useRef();
    let holdMode

    useEffect(() => {
        if (isPrinting && promiseResolveRef.current) {
            // Resolves the Promise, letting `react-to-print` know that the DOM updates are completed
            promiseResolveRef.current();
        }
    }, [isPrinting]);
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        onBeforeGetContent: () => {
            holdMode = themeMode
            dispatch(setThemeMode('light'));
            setShowLogo(true)
            setShowButton(false)
            return new Promise((resolve) => {
                promiseResolveRef.current = resolve;
                setIsPrinting(true);
            });
        },
        onAfterPrint: () => {
            // Reset the Promise resolve so we can print again
            dispatch(setThemeMode(holdMode));
            setShowLogo(false)
            setShowButton(true)
            promiseResolveRef.current = null;
            setIsPrinting(false);
        }
    });

    const handleRestore = async () => {



        const restoreDates = {
            archiveDate: diaryinf[0].archiveDate,
            startDate: diaryinf[0].startDate,
            endDate: diaryinf[0].endDate
        }

        const response = await dispatch(restoreDairyArchive(restoreDates));
        setAlldates(response.payload.archiveDates)

    }

    const handleChange = async e => {
        const { value } = e.target;
        setArchivePick(e.target.value);
        const Archiveinfo = {
            archiveDate: alldates[value]._id.archiveDate,
            startDate: alldates[value]._id.startDate,
            endDate: alldates[value]._id.endDate
        }
        const response = await dispatch(getArchiveDateinfo(Archiveinfo));
        if (response) {
            setDiaryinf(response.payload.archiveReturnData)
        }

    }



    let menuItems = [];

    alldates.forEach(function (alldate, index) {
        menuItems.push(<MenuItem key={index} value={index} >Archive Date {alldate._id.archiveDate}
            From {alldate._id.startDate} To  {alldate._id.endDate} </MenuItem>)

    })

    return (
        <>
            <div className={css.report}>

                <div>
                    <h1>archive by date</h1>
                    <Select
                        sx={{
                            marginTop: 0,
                            width: 700,
                            height: 20,
                        }}
                        value={archivePick}
                        onChange={handleChange}
                    >
                        {menuItems}
                    </Select>
                </div>

                <div ref={printRef} >

                    {showLogo &&
                        <div className={css.logo}>
                            <LogoSVG
                                className={styles.imageLogo}
                                alt="A waistline with a green measuring tape"
                            />
                        </div>}


                    <h3 className={css.centerText}>Dairy Archive Summary for </h3>
                    <h5 className={css.centerText}>{userinfo[0].name}   ({userinfo[0].email})</h5>
                    <h5 className={css.centerText}>Archived on {diaryinf[0].archiveDate}</h5>
                    <h5 className={css.centerText}>{diaryinf[0].startDate} through {diaryinf[0].endDate}</h5>


                    {calcinfo[0].calculatorEntries[0].calculatorEntry[0].unitOfMeasure !== "S" ?
                        <>
                            <h5 className={css.centerText}>Height:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].height.toString()}cm  Age:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].age.toString()}  BloodType:   {calcinfo[0].calculatorEntries[0].calculatorEntry[0].bloodType} </h5>
                            <h5 className={css.centerText}>Current Weight:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].currentWeight.toString()}kg  Desired Weight:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].desiredWeight.toString()}kg</h5>
                        </> :
                        <>
                            <h5 className={css.centerText}>Height:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].heightFeet.toString()}  feet {calcinfo[0].calculatorEntries[0].calculatorEntry[0].heightInch.toString()}  inches  Age:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].age.toString()}  BloodType:   {calcinfo[0].calculatorEntries[0].calculatorEntry[0].bloodType} </h5>
                            <h5 className={css.centerText}>Current Weight:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].currentWeightLbs.toString()}lbs    Desired Weight:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].desiredWeightLbs.toString()}lbs</h5>
                        </>

                    }




                    {diaryinf.map((item, index) => (

                        <div key={`archiveDate-${index}`}>

                            {/* {dayCalories = 0}
                            {dairyRate = item.dailyRate} */}


                            <div className={css.row}>
                                <h4 key={`date-${index}`} className={css.dateHeader}> {item.date}</h4>
                            </div>
                            <div key={`rowTitle-${index}`} className={css.row}>
                                <h4 key={`FoodTitle-${index}`} className={css.firstColumn} >Food Name</h4>
                                <h4 key={`gramsTitle-${index}`} className={css.otherColumn}> Grams</h4>
                                <h4 key={`calsTitle-${index}`} className={css.otherColumn}>Calories</h4>
                            </div>

                            {item.foodItems.map((food, rowID) =>
                                <>
                                    <div className={css.row} key={`foodGeroup-${rowID}`}>

                                        <p key={`title-${rowID}`} className={css.firstColumn}>{food.title}</p>
                                        <p key={`weight-${rowID}`} className={css.otherColumn}>{food.weight}</p>
                                        <p key={`calories-${rowID}`} className={css.otherColumn}>{food.calories}</p>
                                    </div>
                                    {/* {dayCalories = dayCalories + food.calories} */}

                                </>
                            )}

                            <div key={`totalHead-${index}`} className={css.row}>
                                <p key={`totalHeadDaily-${index}`} className={css.totalColumn}>
                                    Daily Rate:
                                </p>
                                <p key={`totalHeadconsumed-${index}`} className={css.totalColumn}>
                                    Calories consumed
                                </p>
                                <p key={`totalHeadRemaining-${index}`} className={css.totalColumn}>
                                    Remaining calories
                                </p>
                            </div>
                            <div key={`totalamtd-${index}`} className={css.row}>
                                <p key={`totalamtDaily-${index}`} className={css.totalColumn}>
                                    {Math.round(item.dailyRate * 100) / 100}
                                </p>
                                <p key={`totalamtconsumed-${index}`} className={css.totalColumn}>
                                    {(Math.round(item.foodItems.reduce(function (prev, cur) {
                                        return prev + cur.calories;
                                    }, 0) * 100) / 100).toFixed(2)}
                                </p>
                                <p key={`totalamtRemaining-${index}`} className={css.totalColumn}>
                                    {(Math.round((item.dailyRate - (item.foodItems.reduce(function (prev, cur) {
                                        return prev + cur.calories;
                                    }, 0))) * 100) / 100).toFixed(2)}
                                </p>

                            </div>


                        </div>
                    ))}
                    <div className={css.buttons}>
                        {showButton &&
                            <CustomButton onClick={handlePrint}
                                color="orange"
                                size="wide"

                            >
                                Print Archive Summary
                            </CustomButton>
                        }
                        {showButton &&
                            <CustomButton onClick={handleRestore}
                                color="orange"
                                size="wide"

                            >
                                Restore Archive
                            </CustomButton>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArchiveByDate;
