import React, { useState } from 'react';
import { FaCamera, FaCloudUploadAlt, FaCalendarAlt, FaMusic } from 'react-icons/fa';

const Photographers = () => {
    const [eventType, setEventType] = useState('Wedding');

    const haldiPhotos = [
        '/Eventplanner/haldi1.jpeg',
        '/Eventplanner/haldi2.jpg',
        '/Eventplanner/haldi3.jpg'
    ];

    const weddingPhotos = [
        '/Eventplanner/weddingphoto1.jpeg',
        '/Eventplanner/weddingimage2.jpeg',
        '/Eventplanner/weddingimage3.jpg'
    ];

    const djPhotos = [
        '/public/dj1.jpg',
        '/Eventplanner/dj2.webp',
        '/Eventplanner/dj33.jpg'
    ];

    const selectedPhotos = eventType === 'Haldi' ? haldiPhotos : eventType === 'Wedding' ? weddingPhotos : djPhotos;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
    };

    return (
        <div className="bg-black min-h-screen text-white py-10">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-extrabold text-center text-yellow-400 mb-12">
                    Premium Photography Services
                </h1>
                <p className="text-center text-xl text-gray-400 mb-8">
                    Capture your special moments with our expert photography. Select your event!
                </p>

                <div className="flex justify-center mb-10">
                    <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md"
                    >
                        <option value="Wedding">Wedding</option>
                        <option value="Haldi">Haldi</option>
                        <option value="DJ">DJ</option>
                    </select>
                </div>

                <div className="flex justify-center gap-6 mb-12">
                    <div className="text-center">
                        <FaCamera className="text-6xl mb-4 text-yellow-400" />
                        <p className="text-xl">Photography</p>
                    </div>
                    <div className="text-center">
                        <FaCloudUploadAlt className="text-6xl mb-4 text-yellow-400" />
                        <p className="text-xl">Upload Your Image</p>
                    </div>
                    <div className="text-center">
                        <FaCalendarAlt className="text-6xl mb-4 text-yellow-400" />
                        <p className="text-xl">Event Date</p>
                    </div>
                    <div className="text-center">
                        <FaMusic className="text-6xl mb-4 text-yellow-400" />
                        <p className="text-xl">Music & Entertainment</p>
                    </div>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="bg-black text-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
                        <h2 className="text-3xl font-semibold mb-4">{eventType} Photography</h2>
                        <p className="text-lg text-gray-400 mb-6">
                            Our premium {eventType} photography services capture your special moments with elegance.
                        </p>
                        <button className="bg-yellow-400 text-black py-2 px-6 rounded-full text-lg hover:bg-yellow-300 transition-all">
                            Book Your Photographer
                        </button>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-semibold text-center text-yellow-400 mb-8">
                        {eventType} Photos
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {selectedPhotos.map((photo, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={photo}
                                    alt={`${eventType} photo ${index + 1}`}
                                    className="w-full h-60 object-cover rounded-lg shadow-md"
                                />
                                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-3 rounded-full">
                                    {eventType} Event
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-black text-white p-8 rounded-2xl shadow-xl w-full max-w-2xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center text-yellow-400 mb-8">
                        Contact the Photographer
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-lg" htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full py-2 px-4 bg-gray-800 text-white rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-lg" htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" required className="w-full py-2 px-4 bg-gray-800 text-white rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-lg" htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" required rows="4" className="w-full py-2 px-4 bg-gray-800 text-white rounded-lg" />
                        </div>
                        <button type="submit" className="bg-yellow-400 text-black py-2 px-6 rounded-full text-lg hover:bg-yellow-300 transition-all w-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Photographers;